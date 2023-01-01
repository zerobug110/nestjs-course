/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { Task } from './task.modal';
import { TaskService } from './task.service';
@Controller('task')
export class TaskController {
  constructor(private taskservice: TaskService) {

  }

  @Get()
  getAllTask(): Task[] {
    return this.taskservice.getAllTask()
  }
}
