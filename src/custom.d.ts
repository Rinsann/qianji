type RecordItem = {
  tags: string[],
  notes: string,
  type: string,
  amount: number,
  createdAt?: string
}


type RootState = {
  recordList: RecordItem[],
  tagList: Tag[],
  currentTag?: Tag
}

type Tag = {
  id: string
  name: string
}
type TagListModel = {
  data: Tag[]
  fetch: () => Tag[]
  create: (name: string) => "success" | "duplicated" //联合类型
  update: (id: string, name: string) => "success" | "not found" | "duplicated"
  save: () => void
  remove: (id: string) => boolean

}

