"use client"
import { TextField, Button } from '@radix-ui/themes'
import SimpleMDE from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css";
import {useForm, Controller} from 'react-hook-form';

interface IssueForm {
    title: string;
    description: string;
}

const NewIssuePage = () => {
    const {register, control, handleSubmit} = useForm<IssueForm>();
  return (
    <form 
    className='max-w-xl space-y-3' onSubmit={handleSubmit((data) => console.log(data))}>
<TextField.Root placeholder="Title" {...register("title")}>
	<TextField.Slot>
		{/* <MagnifyingGlassIcon height="16" width="16" /> */}
	</TextField.Slot>
</TextField.Root>
<Controller
    name="description"
    control={control}
    render={({ field }) => <SimpleMDE {...field} placeholder="Description" />}
/>
<Button>Submit New Issue</Button>

    </form>
  )
}

export default NewIssuePage