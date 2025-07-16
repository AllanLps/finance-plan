"use client";

import { CalendarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import { Calendar } from "../ui/calendar";

export function CalendarComponent() {
  const [date, setDate] = useState<Date>(new Date());
  return (
    <div className="w-full">
      {" "}
      <Label>Data da Transação</Label>
      <Popover>
        <PopoverTrigger>
          <Button variant="outline">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP", { locale: ptBR }) : "Selecionar data"}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => date && setDate(date)}
            locale={ptBR}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
