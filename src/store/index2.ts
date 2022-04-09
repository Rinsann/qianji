import recordListModel from "@/models/recordListModel";
import tagListModel from "@/models/tagListModel";

const store = {
  // record store
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => recordListModel.create(record),

  // tag store
  findTag(id: string) {
    return this.tagList.filter(t => t.id === id)[0];
  },
  tagList: tagListModel.fetch(),
  createTag: (name: string) => {
    if (name) {
      const message = tagListModel.create(name);
      if (message === "duplicated") {
        window.alert("标签名重复");
      }
    }
  },
  removeTag: (id: string) => {
    return tagListModel.remove(id);
  },
  updateTag: (id: string, name: string) => {
    return tagListModel.update(id, name);
  }
};

export default store;
