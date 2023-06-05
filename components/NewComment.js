import React from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";

export default function NewComment() {
    return (
        <div className='mt-3'>
            <h1 className='mt-3'>New Comment</h1>
            <div className='justify-center mx-auto text-center mt-3'>
                <Card color="transparent" shadow={false}>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 justify-center m-auto">
                        <div className="mb-4 flex flex-col gap-6">
                            <Input size="lg" label="Name" />
                            <Input size="lg" label="Email" />
                            <Input type="password" size="lg" label="Password" />
                        </div>
                        <Checkbox
                            label={
                                (
                                    <Typography
                                        variant="small"
                                        color="gray"
                                        className="flex items-center font-normal"
                                    >
                                        I agree the
                                        <a
                                            href="#"
                                            className="font-medium transition-colors hover:text-blue-500"
                                        >
                                            &nbsp;Terms and Conditions
                                        </a>
                                    </Typography>
                                )
                            }
                            containerProps={{ className: "-ml-2.5" }}
                        />
                        <Button className="mt-6" fullWidth>
                            Register
                        </Button>
                        <Typography color="gray" className="mt-4 text-center font-normal">
                            Already have an account?{" "}
                            <a
                                href="#"
                                className="font-medium text-blue-500 transition-colors hover:text-blue-700"
                            >
                                Sign In
                            </a>
                        </Typography>
                    </form>
                </Card>
            </div>


        </div>
    )
}
