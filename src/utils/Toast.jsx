import { Transition } from '@headlessui/react';
import { Toaster, ToastIcon, resolveValue } from 'react-hot-toast';

/**
 * Notification element with a given message
 * @returns JSX element toaster
 */
export function TailwindToaster() {
  return (
    <Toaster>
      {(t) => (
        <Transition
          appear
          show={t.visible}
          className="transform p-4 flex bg-white dark:bg-[#303F56] rounded shadow-lg"
          enter="transition-all duration-150"
        >
          <ToastIcon toast={t} />
          <p className="px-4 ">{resolveValue(t.message, t)}</p>
        </Transition>
      )}
    </Toaster>
  );
}
