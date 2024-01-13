import {
	Box,
	Button,
	Step,
	StepButton,
	StepLabel,
	Stepper,
} from '@mui/material'
import React from 'react'
import CustomLink from './CustomLink'

const CheckoutStep = ({ stepOne, stepTwo, stepThree, stepFour }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				width: '100%',
				my: 3,
				direction: 'row',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Stepper activeStep={stepOne}>
				{stepOne ? (
					<Step>
						<StepButton>
							<Button component={CustomLink} href='/login'>
								Sign In
							</Button>
						</StepButton>
					</Step>
				) : (
					<Step>
						<StepLabel>
							<Button disabled>Sign In</Button>
						</StepLabel>
					</Step>
				)}
			</Stepper>
			<Stepper activeStep={stepTwo}>
				{stepTwo ? (
					<Step>
						<StepLabel>
							<Button component={CustomLink} href='/shipping'>
								Shipping
							</Button>
						</StepLabel>
					</Step>
				) : (
					<Step>
						<StepLabel>
							<Button disabled>Shipping</Button>
						</StepLabel>
					</Step>
				)}
			</Stepper>
			<Stepper activeStep={stepThree}>
				{stepThree ? (
					<Step>
						<StepLabel>
							<Button component={CustomLink} href='/payment'>
								payment
							</Button>
						</StepLabel>
					</Step>
				) : (
					<Step>
						<StepLabel>
							<Button disabled>payment</Button>
						</StepLabel>
					</Step>
				)}
			</Stepper>
			<Stepper activeStep={stepFour}>
				{stepFour ? (
					<Step>
						<StepLabel>
							<Button component={CustomLink} href='/placeOrder'>
								Place Order
							</Button>
						</StepLabel>
					</Step>
				) : (
					<Step>
						<StepLabel>
							<Button disabled>Place Order</Button>
						</StepLabel>
					</Step>
				)}
			</Stepper>
		</Box>
	)
}

export default CheckoutStep
