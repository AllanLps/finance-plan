"use client";

import { CalendarIcon, PlusCircle } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectValue,
  SelectItem,
  SelectTrigger,
} from "../ui/select";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar } from "../ui/calendar";
import { Textarea } from "../ui/textarea";

export function NewTransactionDialog() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("expense");
  const [date, setDate] = useState<Date>(new Date());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setType("expense");
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Nova Transação
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova transação</DialogTitle>
          <DialogDescription>
            Adicione uma nova receita ou despesa às suas finanças.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label>Tipo de transação</Label>
            <RadioGroup
              value={type}
              onValueChange={setType}
              className="flex mt-3 space-x-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="income" id="income" />
                <Label className="font-medium text-green-600">Receita</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="expense" id="expense" />
                <Label className="font-medium text-red-600">Despesa</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Descrição *</Label>
              <Input
                id="description"
                placeholder="Ex: Supermercado, Salário..."
              />
            </div>
            <div className="space-y-2">
              <Label>Valor *</Label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                  R$
                </span>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="0,00"
                  className="pl-8"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Categoria *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a categoria" />
                </SelectTrigger>
                <SelectContent>
                  {type === "income" ? (
                    <>
                      <SelectItem value="salary">Salário</SelectItem>
                      <SelectItem value="freelance">Freelance</SelectItem>
                      <SelectItem value="investment">Investimentos</SelectItem>
                      <SelectItem value="bonus">Bônus</SelectItem>
                      <SelectItem value="other-income">Outros</SelectItem>
                    </>
                  ) : (
                    <>
                      <SelectItem value="food">Alimentação</SelectItem>
                      <SelectItem value="transport">Transporte</SelectItem>
                      <SelectItem value="housing">Moradia</SelectItem>
                      <SelectItem value="leisure">Lazer</SelectItem>
                      <SelectItem value="health">Saúde</SelectItem>
                      <SelectItem value="education">Educação</SelectItem>
                      <SelectItem value="shopping">Compras</SelectItem>
                      <SelectItem value="bills">Contas</SelectItem>
                      <SelectItem value="other-expense">Outros</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Conta *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a conta" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="checking">Conta Corrente - BB</SelectItem>
                  <SelectItem value="savings">Poupança - CEF</SelectItem>
                  <SelectItem value="investment">Investimento - XP</SelectItem>
                  <SelectItem value="nubank">Cartão Nubank</SelectItem>
                  <SelectItem value="itau">Cartão Itaú</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Data da transação</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date
                    ? format(date, "PPP", { locale: ptBR })
                    : "Selecionar data"}
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(date) => date && setDate(date)}
                  locale={ptBR}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <Label>Observações</Label>
            <Textarea
              id="notes"
              placeholder="Adicione observações sobre esta transação (opcional)"
              className="min-h-[80px]"
            />
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancelar
            </Button>
            <Button type="submit">Adicionar Transação</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
