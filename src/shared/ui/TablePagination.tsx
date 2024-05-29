import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Dispatch, FC, SetStateAction } from 'react'
import ReactPaginate from 'react-paginate'

import { PageSizeSelector } from './PageSizeSelector'

interface Props {
  pageIndex: number
  pageSize: string
  pagesCount: number
  setPageIndex: Dispatch<SetStateAction<number>>
  setPageSize: Dispatch<SetStateAction<string>>
}

export const TablePagination: FC<Props> = ({
  pageIndex,
  pageSize,
  pagesCount,
  setPageIndex,
  setPageSize,
}) => {
  const onPageChange = ({ selected }: { selected: number }) => {
    setPageIndex(selected)
  }

  return (
    <div className={'my-9 flex items-center gap-6'}>
      <ReactPaginate
        activeLinkClassName={'bg-dark-500 text-black dark:text-white'}
        containerClassName={'flex gap-3'}
        disabledLinkClassName={'opacity-20 cursor-not-allowed'}
        forcePage={pageIndex}
        nextLabel={<ArrowRight size={14} className={'text-black dark:text-white'} />}
        nextLinkClassName={'h-6 w-6 flex items-center justify-center text-white'}
        onPageChange={onPageChange}
        pageClassName={'text-white'}
        pageCount={pagesCount}
        pageLinkClassName={
          'flex items-center text-black justify-center h-6 px-1 min-w-[24px] rounded-sm text-sm select-none dark:text-white'
        }
        pageRangeDisplayed={2}
        previousLabel={<ArrowLeft size={14} className={'text-black dark:text-white'} />}
        previousLinkClassName={'h-6 w-6 flex items-center justify-center text-white'}
      />

      <PageSizeSelector pageSize={pageSize} setPageSize={setPageSize} />
    </div>
  )
}
