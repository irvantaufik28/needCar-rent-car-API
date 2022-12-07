class MediaUseCase {
    mediaRepo: any;
    sharp: any;
    fs: any;
    path: any
    constructor(mediaRepo: any, sharp: any, fs: any, path: any) {
        this.mediaRepo = mediaRepo;
        this.sharp = sharp;
        this.fs = fs;
        this.path = path;
    }

    async upload(file: any) {
        let result: any = {
            isSuccess: false,
            statusCode: 404,
            reason: '',
            data: null
        }

        const originalFileName = file.filename;
        const metadata = await this.sharp(file.path).metadata()
        const fileType = metadata.format;

        const randomString = (Math.random() * (100000 - 1) + 1).toString(36).substring(7);

        const smallFileName = randomString + "_small." + fileType;
        const smallDestinationPath = this.path.resolve(file.destination, "", smallFileName);

        const largeFileName = randomString + "_large." + fileType;
        const largeDestinationPath = this.path.resolve(file.destination, "", largeFileName);

        await this.sharp(file.path).resize(500).jpeg({ quality: 90 }).toFile(smallDestinationPath);
        await this.sharp(file.path).resize(1000).jpeg({ quality: 90 }).toFile(largeDestinationPath);

        this.fs.unlinkSync(file.path);

        const createData = {
            name: originalFileName,
            mimeType: fileType,
            small: smallFileName,
            large: largeFileName,
        };

        const data = await this.mediaRepo.createMedia(createData);

        result.data = data;
        result.isSuccess = true;
        result.statusCode = 200;

        return result;

    }
    async createMedia(createData: any) {
        const result = {
          isSuccess: false,
          statusCode: 404,
          reason: '',
          data: null,
        };
    
        const data = await this.mediaRepo.createMedia(createData);
    
        result.isSuccess = true;
        result.statusCode = 200;
        result.data = data;
    
        return result;
      }

}

export default MediaUseCase;