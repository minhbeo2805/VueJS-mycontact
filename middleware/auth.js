import { Message } from 'element-ui';

export default function({ route, store, redirect }) {
  if (route.path != "/" && !store.getters["login/authenticatedUser"]) {
    Message.warning("You must login to continue !")
    redirect("/");
  }
}
