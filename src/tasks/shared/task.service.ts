import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task';

@Injectable()
export class TaskService {

    constructor(@InjectModel('Task')
     private readonly TaskModel: Model<Task>){}

    async getAll(){
        return await this.TaskModel.find().exec();
    }

    async getByID(id: string){
        return await this.TaskModel.findById(id).exec();
    }

    async create(task: Task){
        const createTask = new this.TaskModel(task);
        return await createTask.save();
    }

    async update(id: string, task: Task){
        await this.TaskModel.updateOne({_id: id}, task).exec();
        return this.getByID(id);
    }

    async delete(id: string){
        return await this.TaskModel.deleteOne({_id: id}).exec();
    }
}