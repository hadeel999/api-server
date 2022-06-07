class Collection{
    constructor(model){
        this.model=model;
    }
    
    async create(obj) {
        try {
            let newRecord = await this.model.create(obj);
            return newRecord;
        } catch (e) {
            console.error("Error in creating a new record in model ", this.model)
        }
    }

    async read(dataID) {
        try {
            let record = null;
            if (dataID) {
                record = await this.model.findOne({ where: { id: dataID } });
                return record;
            }
            else {
                record = await this.model.findAll();
                return record;
            }

        } catch (e) {
            console.error("Error in reading record in model ", this.model)
        }

    }

    async update(obj) {
        try {
            let updated = await record.update(obj);
            return updated;
        } catch (e) {
            console.error("Error in updating record in model ", this.model)
        }
    }

    async delete(dataID) {
        if (!dataID) {
            throw new Error('No id provided for model ', this.model)
        }
        try {
            let deleted = await this.model.destroy({ where: { id: dataID } });
            return deleted;
        } catch (e) {
            console.error('Error in deleting record in model ', this.model);
        }
    }
}

module.exports = Collection;