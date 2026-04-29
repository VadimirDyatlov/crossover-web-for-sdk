import type { ChangeEvent, FC } from 'react';
import { SearchIcon } from '@/shared/assets/icons';
import { cn } from '@/shared/lib';

interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  className?: string;
  autoFocus?: boolean;
}

export const SearchField: FC<SearchFieldProps> = ({
  value,
  onChange,
  placeholder = 'Поиск',
  onFocus,
  onBlur,
  className,
  autoFocus = false,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClear = () => {
    onChange('');
  };

  return (
    <div
      className={cn(
        'flex w-full items-center gap-1 rounded-[101px] bg-[#f5f5f5] px-3 py-3 cursor-text',
        className,
      )}
    >
      <SearchIcon className="shrink-0 text-[#9CA3AF]" />
      <input
        type="search"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
        autoFocus={autoFocus}
        className="flex-1 bg-transparent outline-none placeholder:text-[#9CA3AF] focus:placeholder:opacity-0 caret-black text-[13px] font-medium"
      />
      {value && (
        <button
          type="button"
          onClick={handleClear}
          className="shrink-0 flex h-6 w-6 items-center justify-center"
          aria-label="Очистить поиск"
        >
          <svg
            viewBox="0 0 10 10"
            className="h-2.5 w-2.5 text-[#9CA3AF]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L9 9M9 1L1 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};
