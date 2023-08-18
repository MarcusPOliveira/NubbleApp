export interface MetaDataPageAPI {
  current_page: number
  first_page: number
  first_page_url: string
  last_page: number
  last_page_url: string
  next_page_url: string | null
  per_page: number
  previous_page_url: string | null
  total: number
}

/**
 * @description Interface which defines the format of a page data from the API
 * @template Data The type of the data
 */
export interface PageAPI<Data> {
  meta: MetaDataPageAPI
  data: Data[]
}
