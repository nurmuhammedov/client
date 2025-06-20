import {yupResolver} from '@hookform/resolvers/yup'
import {
	Button,
	Card,
	Checkbox,
	Form,
	Input,
	Loader,
	PageTitle,
	Select
} from 'components'
import {BUTTON_THEME, FIELD} from 'constants/fields'
import {ROLES} from 'constants/roles'
import {useAdd, useDetail, useUpdate} from 'hooks'
import {IUser} from 'modules/users/interfaces'
import {FC, useEffect} from 'react'
import {Controller, useForm} from 'react-hook-form'
import {useNavigate, useParams} from 'react-router-dom'
import {usersSchema} from 'schemas/users'
import {getSelectValue} from 'utilities/common'
import {enumToOptions} from 'utilities/select'


interface IProperties {
	edit?: boolean;
}

const Index: FC<IProperties> = ({edit = false}) => {
	const navigate = useNavigate()
	const {id = undefined} = useParams()

	const {
		handleSubmit,
		control,
		register,
		setValue,
		watch,
		reset,
		formState: {errors}
	} = useForm({
		mode: 'onTouched',
		defaultValues: {
			fullName: '',
			usernameUpdate: !edit,
			username: '',
			roleUpdate: !edit,
			role: undefined,
			passwordUpdate: !edit,
			password: '',
			confirmPassword: ''
		},
		resolver: yupResolver(usersSchema)
	})

	const {mutateAsync: add, isPending: isAdding} = useAdd('users')
	const {mutateAsync: update, isPending: isUpdating} = useUpdate('users', id)
	const {
		detail,
		isPending: isDetailLoading
	} = useDetail<IUser>('users/', id, edit)

	useEffect(() => {
		if (detail && edit) {
			reset({
				fullName: detail.fullName,
				usernameUpdate: !edit,
				username: detail.username,
				roleUpdate: !edit,
				role: detail.role,
				passwordUpdate: !edit,
				password: '',
				confirmPassword: ''
			})
		}
	}, [detail, edit])


	if (isDetailLoading && edit) {
		return <Loader/>
	}

	return (
		<>
			<PageTitle title={edit ? 'Edit' : 'Add user'}>
				<div className="flex justify-center gap-lg align-center">
					<Button onClick={() => navigate(-1)} theme={BUTTON_THEME.OUTLINE}>
						Back
					</Button>

					<Button
						type={FIELD.BUTTON}
						theme={BUTTON_THEME.PRIMARY}
						disabled={isAdding || isUpdating}
						onClick={() => {
							if (!edit) {
								handleSubmit((data) =>
									add(data)
										.then(async () => {
											reset()
											navigate(-1)
										})
								)()
							} else {
								handleSubmit((data) =>
									update(data)
										.then(async () => {
											reset()
											navigate(-1)
										})
								)()
							}
						}}
					>
						{edit ? 'Edit' : 'Save'}
					</Button>
				</div>
			</PageTitle>
			<Card style={{padding: '1.5rem'}}>
				<Form style={{flex: 0}} className="grid gap-xl" onSubmit={e => e.preventDefault()}>
					<div className="span-4">
						<Input
							id="fullName"
							type={FIELD.TEXT}
							label="Full name"
							error={errors?.fullName?.message}
							{...register('fullName')}
						/>
					</div>
					<div className="span-4">
						<Checkbox
							id="usernameUpdate"
							title="Username update"
							{...register('usernameUpdate')}
							onChange={e => {
								register('usernameUpdate')?.onChange(e)
								if (!e.target.checked) {
									setValue('username', detail?.username)
								}
							}}
						/>
					</div>
					<div className="span-4">
						<Input
							id="username"
							label="Login"
							disabled={!watch('usernameUpdate')}
							error={errors.username?.message}
							{...register('username')}
						/>
					</div>
					<div className="span-4">
						<Checkbox
							id="roleUpdate"
							title="Role update"
							{...register('roleUpdate')}
							onChange={e => {
								register('roleUpdate')?.onChange(e)
								if (!e.target.checked) {
									setValue('role', detail?.role)
								}
							}}
						/>
					</div>
					<div className="span-4">
						<Controller
							name="role"
							control={control}
							render={({field}) => (
								<Select
									id="role"
									options={enumToOptions(ROLES)}
									isDisabled={!watch('roleUpdate')}
									label="Role"
									error={errors?.role?.message}
									value={getSelectValue(enumToOptions(ROLES), field.value)}
									handleOnChange={field.onChange}
								/>
							)}
						/>
					</div>
					<div className="span-4">
						<Checkbox
							id="passwordUpdate"
							title="Password update"
							{...register('passwordUpdate')}
							onChange={e => {
								register('passwordUpdate')?.onChange(e)
								if (!e.target.checked) {
									setValue('password', '')
									setValue('confirmPassword', '')
								}
							}}
						/>
					</div>
					<div className="span-4">
						<Input
							id="password"
							label="Password"
							type="password"
							disabled={!watch('passwordUpdate')}
							error={errors.password?.message}
							{...register('password')}
						/>
					</div>
					<div className="span-4">
						<Input
							id="confirmPassword"
							label="Confirm password"
							disabled={!watch('passwordUpdate')}
							type="password"
							error={errors.confirmPassword?.message}
							{...register('confirmPassword')}
						/>
					</div>
				</Form>
			</Card>
		</>
	)
}

export default Index
