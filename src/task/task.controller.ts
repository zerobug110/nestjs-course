/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';
@Controller('task')
export class TaskController {
  constructor(private taskservice: TaskService) {

  }
}
