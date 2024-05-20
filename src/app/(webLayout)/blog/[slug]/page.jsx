const ProfileCard = ({ params }) => {
  return (
    <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
      <h2 className="rounded-full">{params.id}</h2>
    </section>
  );
};

export default ProfileCard;
