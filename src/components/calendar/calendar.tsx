"use client";

import { CalendarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export function Calendar() {
  return (
    <div>
      {" "}
      <Label>Data da Transação</Label>
      <Popover>
        <PopoverTrigger>
          <Button variant="outline">
            <CalendarIcon className="mr-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>

        <PopoverContent>
          <Calendar />
        </PopoverContent>
      </Popover>
    </div>
  );
}
