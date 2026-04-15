import { cn } from "@/shared/lib";
import type { FC } from "react"

interface AddOrderCommentProps {
  className?: string;
}

// TODO: В разработке.
export const AddOrderComment: FC<AddOrderCommentProps> = ({ className }) => {
  // const { comment, setComment } = useCartStore();

  // const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   setComment(e.target.value);
  // };

  return (
    <div
      className={cn(
        'rounded-[4px_16px_16px_16px]',
        'py-[18px] px-[16px]',
        'm-[24px] mb-[140px]',
        // 'm-[24px] mb-[calc(140px+env(safe-area-inset-bottom,0px))]',
        'border border-[rgb(180,180,180)]',
        'bg-white focus-within:border-black transition-colors',
        className,
      )}
    >
      <textarea
        placeholder="Комментарий к заказу"
        className={cn(
          'w-full bg-transparent border-none outline-none resize-none',
          'text-[16px] leading-[1.2] m-0 p-0 block align-top',
          'placeholder:text-[rgb(180,180,180)]',
        )}
        rows={1}
      />
    </div>
  );
};
