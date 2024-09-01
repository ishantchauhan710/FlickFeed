interface BadgeIconProps {
  icon: React.ReactNode;
  badgeText?: string;
  title?: string;
}

export default function BadgeIcon({ icon, badgeText, title }: BadgeIconProps) {
  return (
    <div
      className="relative cursor-pointer text-primary-foreground"
      title={title}
    >
      {badgeText && (
        <div className="absolute right-0 top-0 -mr-1 -mt-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-center text-[0.6rem] font-semibold shadow-sm">
          {badgeText}
        </div>
      )}
      {icon}
    </div>
  );
}
