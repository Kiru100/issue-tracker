"use client";

import { Button, TextArea, TextField } from '@radix-ui/themes';
import React from 'react'

const NewIssuePage = () => {
    return (
        <div className='max-w-xl space-y-3'>
            <TextField.Root className='mb-2'>
                <TextField.Input placeholder="Title" />
            </TextField.Root>
            <TextArea placeholder="Reply to comment…" />
            <Button>Submit New Issue</Button>
        </div>
    )
}

export default NewIssuePage;
