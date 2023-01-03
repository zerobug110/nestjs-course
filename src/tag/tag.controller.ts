import { TagService } from './tag.service';
import { Controller, Get} from "@nestjs/common";

@Controller('tags')
export class TagController {
    // constructor (private tagservice: TagService) {}

    @Get()
    getTagData() {
        // this.tagservice.findAll()
        return "hello"
    }
}