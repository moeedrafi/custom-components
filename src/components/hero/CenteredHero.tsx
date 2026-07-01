import { AnnouncementBadge } from "@/components/badge/AnnouncementBadge";

/*
Hero sections are often built with vertical padding (py-*)
instead of `min-h-svh flex items-center`.


Why?
- The hero gets generous spacing above and below without
  forcing vertical centering.
- If the content grows, the section naturally expands downward
  while maintaining the same top spacing.
- With flex centering, the entire content block is centered.
  As the block becomes taller than the viewport, its top edge
  moves upward, causing the heading to appear closer to the navbar.


Use:
- `py-*` for reusable/content-driven hero sections.
- `min-h-svh flex items-center` for splash screens or heroes
  that should always be vertically centered.
*/

export const CenteredHero = () => {
  return (
    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <AnnouncementBadge />

        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            Data to enrich your online business
          </h1>

          <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
          </p>
        </div>
      </div>
    </div>
  );
};
