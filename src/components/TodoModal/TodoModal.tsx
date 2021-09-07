import {FC} from "react";
import styles from "./TodoModal.module.scss";


interface Props {
    modal: boolean,
    setModal: (item: boolean) => void;
    children: JSX.Element;
}


const TodoModal: FC<Props> = ({modal, setModal, children} : Props) => {

    const closeModal = () => {
        setModal(false);
    };
    
    return (
        <>
            {
                modal ? 
                <div onClick={closeModal} className={styles.modal} >
                    <div onClick={(e) => e.stopPropagation()} className={styles.modal_content}>
                        <span onClick={closeModal} className={styles.close}>&times;</span>
                        {children}
                    </div>
                </div> : null
            }

        </>
    )
}

export default TodoModal;
