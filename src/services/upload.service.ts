/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
import { Storage } from '@/lib/firebase';
import moment from 'moment';

export class UploadService {
  static async upload(
    file: any,
    callback?: (param: number) => void
  ): Promise<string> {
    if (!file) return '';
    return new Promise((resolve, reject) => {
      const ref = Storage.ref(`media/${moment().valueOf()}`);
      const task = ref.put(file);
      task.on(
        'state_changed',
        (snapshot) => {
          if (typeof callback === 'function') {
            callback((snapshot.bytesTransferred / file.size) * 100);
          }
        },
        (error) => {
          reject(error);
        },
        () => {
          task.snapshot.ref.getDownloadURL().then((downloadUrl) => {
            resolve(downloadUrl);
          });
        }
      );
    });
  }

  static summaryProcess(summaryFileSize: any[]): number {
    const total = summaryFileSize.reduce(
      (currentValue, currentItem) => {
        return currentItem.reduce((v: any, currentV: any) => {
          v.size += currentV.size;
          v.uploading += currentV.uploading;
          return v;
        }, currentValue);
      },
      { size: 0, uploading: 0 }
    );
    return (total.uploading / total.size) * 100;
  }

  static async uploadMultiple(
    files: FileList,
    callback: (param: number) => number
  ): Promise<any> {
    if (!files || !Array.isArray(files)) return;
    const summaryFileSize = files.reduce((arr, current) => {
      arr.push({
        size: current.size || 0,
        uploading: 0,
      });
      return arr;
    }, []);
    const uploadProcess = (process: any, index: number) => {
      if (typeof callback === 'function') {
        summaryFileSize[index].uploading = process;
        const summaryProcess = this.summaryProcess(summaryFileSize);
        callback(summaryProcess);
      }
    };
    const promise = files.map((file, index) =>
      this.upload(file, (process) => uploadProcess(process, index))
    );
    const response = await Promise.all(promise);
    return response;
  }
}
