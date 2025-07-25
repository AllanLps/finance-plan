"use client";

import { PlusCircle } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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

export function DialogComponent() {
  const [type, setType] = useState("expense");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setType("expense");
  };
  return (
    <Dialog>
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
                required
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
                  required
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Categoria *</Label>
              <Select required>
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
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
