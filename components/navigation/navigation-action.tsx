"use client";

import { Plus } from "lucide-react";

import { ActionTooltip } from "@/components/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

export const NavigationAction = () => {
  const { onOpen } = useModal();

  return (
    <div>
      <ActionTooltip side="right" align="center" label="Add a server">
        <button
          onClick={() => onOpen("createServer")}
          className="group flex items-center"
        >
          {/* bg-background dark:bg-neutral-700 group-hover:bg-emerald-500 */}
          <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-[#f43f5de2] dark:bg-neutral-700 group-hover:bg-red-500">
            {/* text-emerald-500 */}
            <Plus
              className="group-hover:text-white transition text-white dark:text-red-400"
              size={25}
            />
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
};