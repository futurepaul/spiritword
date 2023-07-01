import { useForm } from "react-hook-form";
import { FormSermon, isYouTubeUrl } from "../lib/sermon";

export default function SermonEditor({ sermonToEdit, onSave, submitError }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSermon>({
    defaultValues: sermonToEdit ? sermonToEdit : undefined,
  });

  console.log(sermonToEdit);

  return (
    <div className="single">
      <form onSubmit={handleSubmit(onSave)}>
        <label>
          Title
          {errors.title && <span> * This field is required</span>}
        </label>
        <input {...register("title", { required: true })} />
        <label>
          Date
          {errors.html_date && <span> * This field is required</span>}
        </label>

        <input type="date" {...register("html_date", { required: true })} />
        <label>
          YouTube URL
          {errors.youtube && <span> * Not a valid YouTube URL</span>}
        </label>
        <input
          {...register("youtube", { required: false, validate: isYouTubeUrl })}
        />
        <label>Sermon PDF</label>
        <input
          type="file"
          name="pdf"
          onChange={() => console.log("hello")}
          {...register("pdf", { required: false })}
        />
        <div className="buttons">
          <div />
          <input value="Save" type="submit" />
        </div>
        {submitError && <div className="error">{submitError}</div>}
      </form>
      <style jsx>{`
        .error {
          background-color: red;
          color: white;
          padding: 0.5rem;
          margin: 0.5rem;

        }
        span {
          font-size: 0.75rem;
          color: red;
        }

        form {
          display: flex;
          flex-direction: column;
        }
        label {
          display: flex;
          justify-content: space-between;
          font-size: 1.25rem;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }
        .single {
          background-color: white;
          padding: 1.5rem;
          margin-bottom: 1rem;
        }
        .buttons {
          display: flex;
          justify-content: end;
        }
        .spacer {
          width: 1rem;
        }
      }
      `}</style>
    </div>
  );
}
