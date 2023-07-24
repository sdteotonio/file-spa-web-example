import { service, value } from "fspa/dist";
import { TitleService } from "./title.service";

export class UserTitle {
  name = value("Usuario");
  titles = value<string[]>([]);

  titleService = service(TitleService);

  init() {
    // Timeout apenas para simular o delay de uma requisição.
    setTimeout(() => {
      this.titles.change(this.titleService.getAll());
      this.name.change("Usuario 2");
    }, 1500);
  }
}
