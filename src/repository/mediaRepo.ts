const { Media } = require('../models')

class MediaRepo {
    private media = Media
    constructor() {
        this.media
    }

    async createMedia(data: any) {
        const media = await this.media.create(data);
        return media;
    }

    
    async getMediaById(id: number) {
        const meida = await this.media.findOne({
            where: {
                id
            }
        })
        return meida;
    }

    async deleteMedia(id: number) {
        const meida = await this.media.destroy({
            where: {
                id
            }
        })
        return meida;
    }
}

export default MediaRepo;