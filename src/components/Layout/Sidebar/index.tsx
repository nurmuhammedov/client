// import {Logo} from 'assets/icons'
import {useAuth, useSideMenu} from 'hooks'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'
import {routeByRole} from 'utilities/authentication'
import SidebarItem from './SidebarItem'
import styles from './styles.module.scss'


const Index: FC = () => {
	const {t} = useTranslation()
	const {user} = useAuth()
	const navigate = useNavigate()
	const sideMenu = useSideMenu()

	return (
		<aside className={styles.sidebar}>
			<div className={styles.header} onClick={() => navigate(routeByRole(user?.role))}>
				{/*<Logo/>*/}
				<p>{t('TOPCODER')}</p>
			</div>
			<ul className={styles.menu}>
				{
					sideMenu?.map((item) => (
						<li key={item?.id}>
							<SidebarItem {...item}/>
						</li>
					))
				}
			</ul>
		</aside>
	)
}

export default Index
