import {FC} from "react";
import styles from "./TodoModal.module.scss";


interface Props {
    modal: boolean,
    onClose: () => void;
    children?: React.ReactNode;
    title?: string;
    actions?: {
        cancel?: {
        text: string;
        onCancel: () => void;
        };
        submit?: {
        text: string;
        onSubmit: () => void;
        };
    };
}


const TodoModal: FC<Props> = ({modal, onClose, children, title, actions} : Props) => {


    
    return (
        <>
            {
                modal ? 
                <div onClick={onClose} className={styles.modal} >
                    <div onClick={(e) => e.stopPropagation()} className={styles.modal_content}>
                        <span onClick={onClose} className={styles.close}>&times;</span>
                        {title}
                        {children}
                        {actions && (
                            <div className={styles.actions}>
                                {actions.cancel && (
                                <button className={styles.actions_button} onClick={actions.cancel.onCancel}>
                                    {actions.cancel.text}
                                </button>
                                )}
                                {actions.submit && (
                                <button className={styles.actions_button} onClick={actions.submit.onSubmit}>
                                    {actions.submit.text}
                                </button>
                                )}
                            </div>
                        )}
                    </div>
                </div> : null
            }

        </>
    )
}

export default TodoModal;
