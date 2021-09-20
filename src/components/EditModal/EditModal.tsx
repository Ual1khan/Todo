import React, { useContext, useEffect } from "react";
import TodoContext from "../../contexts/todo.context";
import Modal from "../TodoModal/TodoModal";
import { Todo } from "../../shared/todo";

import { useForm } from "react-hook-form";
import styles from "./EditModal.module.scss";

interface Props {
  open: boolean;
  onClose: () => void;
}

type FormData = {
  id: string;
  text: string;
  done: boolean;
};

const EditTodoModal = (props: Props) => {
  const { open, onClose } = props;
  const { list, editId, setEditId, editTodo } = useContext(TodoContext);

  const { register, setValue, watch, handleSubmit, formState } =
    useForm<FormData>();
  const doneValue = watch("done");

  useEffect(() => {
    const todo = list.find((el: Todo) => el.id === editId);

    if (todo) {
      setValue("id", todo.id);
      setValue("text", todo.text);
      setValue("done", todo.done);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editId]);

  const handleClose = () => {
    setEditId("");
    onClose();
  };

  const toggleDone = () => {
    setValue("done", !doneValue);
  };

  const onSubmit = handleSubmit((data) => {
    editTodo(data);
    handleClose();
  });

  return (
    <Modal
      modal={open}
      onClose={handleClose}
      title="Edit Todo"
      actions={{
        cancel: {
          text: "Cancel",
          onCancel: handleClose,
        },
        submit: {
          text: "Save",
          onSubmit: onSubmit,
        },
      }}
    >
      <form onSubmit={onSubmit}>
        <input {...register("text", { required: "Please, fill this field" })} />
        <span className="input_error">{formState.errors.text?.message}</span>
        <div
          className={`${styles.switch} ${doneValue ? styles.done : ""}`}
          onClick={toggleDone}
        >
          <span className={styles.slider}></span>
          <span>Done</span>
        </div>
      </form>
    </Modal>
  );
};

export default EditTodoModal;
