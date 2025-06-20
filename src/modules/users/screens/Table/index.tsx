import {Plus} from 'assets/icons'
import {
	Button,
	Card,
	EditButton,
	PageTitle,
	Pagination,
	ReactTable
} from 'components'
import {
	usePaginatedData,
	usePagination
} from 'hooks'
import {IUser} from 'modules/users/interfaces'
import {useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'
import {Column} from 'react-table'


const Index = () => {
	const navigate = useNavigate()
	const {t} = useTranslation()
	const {page, pageSize} = usePagination()

	const {data, totalPages, isPending: isLoading} = usePaginatedData<IUser[]>(
		'users',
		{
			page: page,
			page_size: pageSize
		}
	)


	const columns: Column<IUser>[] = useMemo(
		() => [
			{
				Header: t('№'),
				accessor: (_, index: number) => (page - 1) * pageSize + (index + 1),
				style: {
					width: '3rem',
					textAlign: 'center'
				}
			},
			{
				Header: t('Full name'),
				accessor: (row) => row.fullName
			},
			{
				Header: t('Username'),
				accessor: (row) => row.username
			},
			{
				Header: t('Role'),
				accessor: (row) => row.role
			},
			{
				Header: t('Actions'),
				accessor: (row) => (
					<div className="flex items-start gap-lg">
						<EditButton onClick={() => navigate(`edit/${row.id}`)}/>
					</div>
				)
			}
		],
		[page, pageSize]
	)

	return (
		<>
			<PageTitle title="Users">
				<Button icon={<Plus/>} onClick={() => navigate(`add`)}>
					Add user
				</Button>
			</PageTitle>
			<Card>
				<ReactTable
					columns={columns}
					data={data}
					isLoading={isLoading}
				/>
			</Card>
			<Pagination totalPages={totalPages}/>
		</>
	)
}

export default Index