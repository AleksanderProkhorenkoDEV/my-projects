import LocaleSwitcher from '../switcher-locale/locale-switcher';
import NavigationLink from './navigation-link';
import { useTranslations } from 'next-intl';


export default function Navigation() {
    const t = useTranslations('Navigation');

    return (
        <div className="bg-slate-850">
            <nav className="container flex justify-between p-2 text-white">
                <div>
                    <NavigationLink href="/">{t('home')}</NavigationLink>
                    <NavigationLink href="/projects">{t('pathnames')}</NavigationLink>
                </div>
                <LocaleSwitcher />
            </nav>
        </div>
    );
}