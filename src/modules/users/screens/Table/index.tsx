import {Plus} from 'assets/icons'
import {Button, Card, DeleteButton, DeleteModal, EditButton, Pagination, ReactTable, Tab} from 'components'
import {ROLES} from 'constants/roles'
import {usePaginatedData, usePagination, useSearchParams} from 'hooks'
import {ISelectOption} from 'interfaces/form.interface'
import {IUser} from 'modules/users/interfaces'
import {useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'
import {Column} from 'react-table'


const tabOptions: ISelectOption[] = [
	{label: 'Users', value: ROLES.USER},
	{label: 'Admins', value: ROLES.ADMIN}
]


const Index = () => {
	const navigate = useNavigate()
	const {paramsObject: {role = tabOptions[0]?.value}} = useSearchParams()
	const {t} = useTranslation()
	const {page, pageSize} = usePagination()

	const {data, totalPages, isPending: isLoading} = usePaginatedData<IUser[]>(
		'users',
		{
			page: page,
			page_size: pageSize,
			role
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
						{
							role != ROLES.ADMIN &&
							<DeleteButton id={row?.id}/>
						}
					</div>
				)
			}
		],
		[page, pageSize, role]
	)

	return (
		<>
			<div className="flex align-center justify-between gap-lg" style={{marginBottom: '.5rem'}}>
				<Tab fallbackValue={tabOptions[0]?.value} tabs={tabOptions} query="role"/>
				{
					role == ROLES.USER ?
						<Button icon={<Plus/>} onClick={() => navigate(`add`)}>
							Add user
						</Button> :
						null
				}
			</div>

			<Card>
				<ReactTable
					columns={columns}
					data={data}
					isLoading={isLoading}
				/>
			</Card>
			<Pagination totalPages={totalPages}/>
			<DeleteModal endpoint="users/"/>
		</>
	)
}

export default Index