import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.modal';
import * as uuid from 'uuid/v1';

@Injectable()
export class TaskService {
  private tasks: Task[] = [];

  getAllTask(): Task[] {
    return this.tasks;
  }

  createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }
}
