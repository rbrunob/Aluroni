import styles from './NotFound.module.scss';
import { ReactComponent as Notfoundimage } from 'assets/not_found.svg';
import classNames from 'classnames';
import stylesTheme from 'styles/Tema.module.scss';

export default function NotFound() {
    return (
        <div className={classNames({
            [styles.container]: true,
            [stylesTheme.container]: true
        })}>
            <Notfoundimage />
        </div>
    );
}