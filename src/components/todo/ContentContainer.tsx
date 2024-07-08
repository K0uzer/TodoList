import { ReactNode } from 'react'

import styles from './ContentContainer.module.css'

const ContentContainer = ({
    children,
}: {
    children: ReactNode
}) => {
    return <section className={styles.contentContainer}>{children}</section>
}

export default ContentContainer
