export default {
    /* 
      propertyInfo
    */
    propertyInfo: {
      reportTitle: {
        type: 'input',
        placeholder: '',
        size: {
          default: 12,
          sm: 12,
          md: 12
        },
        validation: {
          isValid: true,
          type: "string",
          notNull: true,
          errMsg: "Required field."
        }
      },
      propertyAddress: {
        type: 'input',
        placeholder: '',
        size: {
          default: 12,
        },
        validation: {
          isValid: true,
          type: "string",
          notNull: true,
          errMsg: "Required field."
        }
      },
      city: {
        type: 'input',
        placeholder: '',
        size: {
          default: 4,
        }
      },
      state: {
        type: 'input',
        placeholder: '',
        size: {
          default: 4,
        }
      },
      zip: {
        type: 'input',
        placeholder: '',
        size: {
          default: 4,
        }
      }
    },
    /* 
      purchaseInfo
    */
    purchaseInfo: {
      purchasePrice: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 6,
        },
        validation: {
          isValid: true,
          type: "integer",
          notNull: false,
          errMsg: "Required field."
        }
      },
      repairCost: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 6,
        }
      },
      annualPropertyTaxes: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 6,
        }
      },
      purchaseClosingCost: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 6,
        }
      },
      afterRepairValue: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 6,
        }
      },
      downPaymentPercent: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 6,
        }
      },
      loanInterestRate: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 6,
        }
      },
      amortizedOverHowManyYears: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 6,
        }
      },
    },
    /* 
      rentalInfo
    */
    rentalInfo: {
			totalGrossMonthlyIncome:{
        type: 'input',
        placeholder: '$',
        size: {
          default: 6,
        }
      },
			otherMonthlyIncome: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 6,
        }
      },
			electricity: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 4,
        }
      },
			waterAndSewer: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 4,
        }
      },
			garbage: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 4,
        }
      },
			pmi: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 4,
        }
      },
			hoas: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 4,
        }
      },
			monthlyInsurance: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 4,
        }
      },
			propertyTaxes: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 4,
        }
      },
			otherExpenses: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 4,
        }
      },
			vacancy: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 6,
        }
      },
			maintenance : {
        type: 'input',
        placeholder: '$',
        size: {
          default: 6,
        }
      },
			capitalExpenditure: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 6,
        }
      },
			managementFee: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 6,
        }
      },
			annualIncomeGrowth: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 6,
        }
      },
			annualPVGrowth: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 6,
        }
      },
			annualExpensesGrowth: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 6,
        }
      },
			salesExpenses: {
        type: 'input',
        placeholder: '$',
        size: {
          default: 6,
        }
      },
  
    }
  };