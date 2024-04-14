'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Check, ChevronsUpDown } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Button } from 'shared/ui/Button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from 'shared/ui/command'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from 'shared/ui/form'
import { Popover, PopoverContent, PopoverTrigger } from 'shared/ui/popover'
import { cn } from 'shared/utils'
import { z } from 'zod'

const languages = [
  { label: 'English', value: 'en' },
  { label: 'Russian', value: 'ru' },
] as const

const FormSchema = z.object({
  language: z.string({
    required_error: 'Please select a language.',
  }),
})

export function ComboboxForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  /* function onSubmit(data: z.infer<typeof FormSchema>) {
    {
      description: (
        <pre className={"mt-2 w-[340px] rounded-md bg-slate-950 p-4"}>
          <code className={"text-white"}>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
        title;
    :
      "You submitted the following values:",
    }
  }*/

  /*onSubmit={form.handleSubmit(onSubmit)}*/

  return (
    <Form {...form}>
      <form className={'space-y-6'}>
        <FormField
          control={form.control}
          name={'language'}
          render={({ field }) => (
            <FormItem className={'flex flex-col'}>
              <FormLabel>Language</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      className={cn(
                        'w-[200px] justify-between',
                        !field.value && 'text-muted-foreground'
                      )}
                      role={'combobox'}
                      variant={'outline'}
                    >
                      {field.value
                        ? languages.find(language => language.value === field.value)?.label
                        : 'Select language'}
                      <ChevronsUpDown className={'ml-2 h-4 w-4 shrink-0 opacity-50'} />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className={'w-[200px] p-0'}>
                  <Command>
                    <CommandInput placeholder={'Search language...'} />
                    <CommandEmpty>No language found.</CommandEmpty>
                    <CommandGroup>
                      {languages.map(language => (
                        <CommandItem
                          key={language.value}
                          onSelect={() => {
                            form.setValue('language', language.value)
                          }}
                          value={language.label}
                        >
                          <Check
                            className={cn(
                              'mr-2 h-4 w-4',
                              language.value === field.value ? 'opacity-100' : 'opacity-0'
                            )}
                          />
                          {language.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              {/*  <FormDescription>
                This is the language that will be used in the dashboard.
              </FormDescription>*/}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type={'submit'}>Submit</Button>
      </form>
    </Form>
  )
}
