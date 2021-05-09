import AdminSingleSermon from "../components/AdminSingleSermon";
import { useSermons } from "../lib/api";

export default function AdminSermonList() {
  const { sermons, deleteSermon } = useSermons();

  return (
    <>
      {sermons.map((sermon) => {
        return (
          <AdminSingleSermon
            key={sermon.id}
            sermon={sermon}
            deleteSermon={deleteSermon}
          />
        );
      })}
    </>
  );
}
