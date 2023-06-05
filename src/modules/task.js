export default class Task {
  constructor(description, index) {
      this.description = description;
      this.checked = false;
      this.index = index;
  }

  check() {
      this.checked === true ? this.checked = false : this.checked = true;
  }

  updateDescription(description) {
      this.description = description;
  }

}