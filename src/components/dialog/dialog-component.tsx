import { ArrowDownCircle, ArrowUpCircle, CirclePlus } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";

import { RadioGroup } from "../ui/radio-group";
import { RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectValue,
  SelectItem,
  SelectGroup,
} from "../ui/select";
import { CalendarComponent } from "../calendar/calendar-component";
import { Textarea } from "../ui/textarea";

export function DialogComponent() {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <Button>
            <CirclePlus />
            Nova Transação
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-gray-100">
          <DialogHeader>
            <DialogTitle>Nova Transação</DialogTitle>
            <DialogDescription>
              Adicione uma nova receita ou despesa às suas finanças!
            </DialogDescription>
          </DialogHeader>

          <div>
            {/* Check de tipo de transação */}
            <div className="">
              <p>Tipo de Transação</p>
              <RadioGroup className="mt-2">
                <div className="flex gap-2">
                  <div className="flex">
                    <RadioGroupItem
                      value="receita"
                      className="border-gray-400 mr-2"
                    />
                    <Label className="text-green-700">
                      Receita <ArrowUpCircle size={15} />
                    </Label>
                  </div>
                  <div className="flex">
                    <RadioGroupItem
                      value="despesa"
                      className="border-gray-400 mr-2"
                    />
                    <Label className="text-red-700">
                      Despesa <ArrowDownCircle size={15} />
                    </Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Categoria do gasto / receita */}
              <div className="space-y-2">
                <Label>Descrição *</Label>
                <Input type="text" placeholder="Ex Supermercado, Salário" />
              </div>

              {/* Campo Valor */}
              <div className="space-y-2">
                <Label>Valor *</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                    R$
                  </span>
                  <Input className="pl-8" type="number" placeholder="0,00" />
                </div>
              </div>

              {/* Campos de select */}
              <div>
                <div className="space-y-2">
                  <Label>Categoria *</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Alimentação" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Categorias</SelectLabel>
                        <SelectItem value="alimentacao">Alimentação</SelectItem>
                        <SelectItem value="transporte">Transporte</SelectItem>
                        <SelectItem value="moradia">Moradia</SelectItem>
                        <SelectItem value="lazer">Lazer</SelectItem>
                        <SelectItem value="saude">Saúde</SelectItem>
                        <SelectItem value="educacao">Educação</SelectItem>
                        <SelectItem value="compras">Compras</SelectItem>
                        <SelectItem value="contas">Contas</SelectItem>
                        <SelectItem value="outros">Outros</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Conta *</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Conta Corrente" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Contas</SelectLabel>
                        <SelectItem value="alimentacao">
                          Conta Investimento - XP
                        </SelectItem>
                        <SelectItem value="transporte">
                          Cartão Nubank
                        </SelectItem>
                        <SelectItem value="moradia">Cartão Inter</SelectItem>
                        <SelectItem value="lazer">Cartão Itaú</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div>
              <CalendarComponent />
            </div>

            <div className="space-y-2">
              <Label>Observações</Label>
              <Textarea
                id="notes"
                placeholder="Adicione observações sobre esta transação (opicional)"
                className="min-h[80px]"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline">
              Cancelar
            </Button>
            <Button>Adicionar Transação</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
