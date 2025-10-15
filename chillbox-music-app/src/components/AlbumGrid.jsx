export default function AlbumGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 w-10/12 mt-4">
      <div className="bg-gray-300 h-48 flex items-center justify-center rounded-2xl">
        ALBUM COVERS
      </div>
      <img
        src="https://i.imgur.com/6V0nO1F.jpg"
        alt="Album"
        className="h-48 w-full object-cover rounded-2xl"
      />
    </div>
  );
}
