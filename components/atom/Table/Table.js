import Link from 'next/link';
import { TABLE_ID } from '@constants/global';
import DeleteIcon from '@mui/icons-material/Delete';

const TableRow = ({ data, indx, id, handleClick, handleDelete }) => {
    const bgColor = indx % 2 == 1 ? 'bg-[#F8F8F8]' : 'bg-white'
    if (id === TABLE_ID.ADMIN_LIST) {
        return (
            <tr className='text-sm'>
                <td className={`px-5 py-2 border-b border-gray-200 ${bgColor} border border-slate-400`}>
                    <p className="text-gray-900 whitespace-no-wrap text-left">{data.first_name}</p>
                </td>
                <td className={`px-5 py-2 border-b border-gray-200 ${bgColor} border border-slate-400`}>
                    <p className="text-gray-900 whitespace-no-wrap text-left">
                        {data.last_name}
                    </p>
                </td>
                <td className={`px-5 py-2 border-b border-gray-200 ${bgColor} border border-slate-400`}>
                    <p className="text-gray-900 whitespace-no-wrap text-left">
                        {data.email}
                    </p>
                </td>
                <td className={`px-5 py-2 border-b border-gray-200 ${bgColor} border border-slate-400`}>
                    <DeleteIcon className='cursor-pointer' onClick={()=>handleDelete && handleDelete()}/>
                </td>
            </tr>
        );
    } else if (id === TABLE_ID.SUPER_ADMIN_GROUPS_LIST) {
        return (
            <tr className='text-sm'>
                <td className={`px-5 py-2 border-b border-gray-200 ${bgColor} border border-slate-400`}>
                    <Link href={`/cms/superAdminGroups/${data.name}`}>
                        <p className="text-[#337ab7] whitespace-no-wrap text-left font-medium cursor-pointer">{data.name}</p>
                    </Link>
                </td>
                <td className={`px-5 py-2 border-b border-gray-200 ${bgColor} border border-slate-400`}>
                    <p className="text-gray-900 whitespace-no-wrap text-left underline font-medium cursor-pointer" onClick={()=> handleClick && handleClick()}>
                        Edit
                    </p>
                </td>
                <td className={`px-5 py-2 border-b border-gray-200 ${bgColor} border border-slate-400`}>
                    <DeleteIcon className='cursor-pointer' onClick={()=> handleDelete && handleDelete()} />
                </td>
            </tr>
        );
    } 
}

const Table = ({ id, title, tableData, tableHeadingArray, children, handleClick, handleDelete, isStickyColumn, tableMinWidth, isLoading }) => {
    return (
        <div className="bg-white pb-4 px-4 rounded-md w-full">
            {title && (
                <div className='pt-3'> {title}</div>
            )}
            <div>
                <div className="sm:pt-4">
                    <div className={`overflow-x-auto shadow-md ${!(tableData?.length == 0 && !isLoading) && "h-[500px]"}`}>
                        <div className="inline-block min-w-full border rounded-lg">
                            <div className='sticky top-0'>
                                {children}
                            </div>
                            <table className={`${tableMinWidth === "max" ? `min-w-max` : "min-w-full"} leading-normal border-collapse border border-slate-400`}>
                                <thead>
                                    <tr className='sticky top-[59px] shadow-lg'>
                                        {
                                            tableHeadingArray.map((item, indx) => {
                                                    return <th key={item} className={`${isStickyColumn && indx == 1 && "sticky left-0 bg-white "} border border-slate-400 px-5 py-4 text-left text-sm font-semibold text-black capitalize tracking-wider bg-[#c9c9c9]`}>{item}</th>
                                            })
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {isLoading && (
                                        <div className="block fixed w-full h-full bg-[#0000008a] inset-0 justify-center items-center">
                                            <div className="top-1/2 left-1/2 absolute " role="status">
                                                <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                </svg>
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    )}
                                    {
                                        tableData?.map((data, indx) => {
                                            return <TableRow indx={indx} key={data?.id || indx} data={data} id={id} handleDelete={handleDelete} handleClick={handleClick} />
                                        })
                                    }
                                </tbody>
                            </table>
                            {tableData?.length == 0 && !isLoading && (
                                <div className="text-gray-900 my-5 text-sm whitespace-no-wrap text-center">No Records found</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;