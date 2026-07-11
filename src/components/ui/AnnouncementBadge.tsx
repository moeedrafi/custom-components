export const AnnouncementBadge = () => {
  return (
    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      <div className="rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
        Announcing our next round of funding.{" "}
        <a href="#" className="font-semibold text-indigo-400">
          Read more <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
};
