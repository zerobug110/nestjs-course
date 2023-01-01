import { Injectable } from '@nestjs/common';
import { Task } from './task.modal';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  getAllTask(): Task[] {
    return this.tasks;
  }
}
