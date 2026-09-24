import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'e14856431cb84bf1ae362eb3dfce9a7f'
                    }
                    'create-sdlc-issue-open-form': {
                        table: 'sys_atf_step'
                        id: '221e0526567c44f3ad3cb3929cb2920d'
                    }
                    'create-sdlc-issue-set-fields': {
                        table: 'sys_atf_step'
                        id: '31f7449e67da4114a375cb371d40fdfd'
                    }
                    'create-sdlc-issue-submit-form': {
                        table: 'sys_atf_step'
                        id: '871a1fc620c24ae8a268eec85db007a0'
                    }
                    'create-sdlc-issue-validate-record': {
                        table: 'sys_atf_step'
                        id: 'd9927b1d86464bd1a2dbbe155070c123'
                    }
                    'create-sdlc-issue-via-form-test': {
                        table: 'sys_atf_test'
                        id: '0591be8e38064e5e95c7e56842df1dee'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '6c73b046937e43bab37d24d3cabb5d8c'
                    }
                    'sdlc-issue-app-menu': {
                        table: 'sys_app_application'
                        id: '13054ef976454c9586b6f63119a98a2e'
                    }
                    'sdlc-issue-ci-gate-suite': {
                        table: 'sys_atf_test_suite'
                        id: 'c7fe4e024806453da1a9adb0afa9d1d7'
                    }
                    'sdlc-issue-list-module': {
                        table: 'sys_app_module'
                        id: '1d8d8beddf834e59b2259b91fce13c8c'
                    }
                    'sdlc-issue-modules-visibility-check': {
                        table: 'sys_atf_step'
                        id: 'aedbd55414474ea4aa50fe8493c64a37'
                    }
                    'sdlc-issue-modules-visible-test': {
                        table: 'sys_atf_test'
                        id: '7884ee5dd220433fbd08b0681810cbeb'
                    }
                    'sdlc-issue-navigate-to-list': {
                        table: 'sys_atf_step'
                        id: '886d3f053e3a4f38a11513d1e3a5672c'
                    }
                    'sdlc-issue-new-module': {
                        table: 'sys_app_module'
                        id: '36235166b11f47b88018e2cd2ddcaabb'
                    }
                }
                composite: [
                    {
                        table: 'sys_variable_value'
                        id: '00aa86ad6ddc48b0baaa82e8b246f6d4'
                        key: {
                            document_key: '871a1fc620c24ae8a268eec85db007a0'
                            variable: 'ae8b91c9ffa333008d3f5d9ad53bf1ba'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '032184f1ecbe4744a570e5bfc43cdf09'
                        key: {
                            document_key: 'aedbd55414474ea4aa50fe8493c64a37'
                            variable: 'b4e438ae73322010ac1560bdfaf6a7a2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '04f121ff9b1547589b2f7d98995a15a7'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '07cdf66064f94a1d9b57c1feedc1e9f0'
                        key: {
                            sys_ui_section: {
                                id: '4ed8f084edcc460b9058617c0ee601f9'
                                key: {
                                    name: 'x_test_sdlc_app_sdlc_issue'
                                    caption: 'Issue Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'environment'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '0a591994be5b4c96ac112e341e46d04d'
                        key: {
                            document_key: 'd9927b1d86464bd1a2dbbe155070c123'
                            variable: '67400008676003007ba405225685efa4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '10fb7a69a0bf4c95bb74e229c21a70fc'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'sdlc_phase'
                            value: 'requirements'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '14468318c64f4c2e94373a4f7eff62c2'
                        key: {
                            sys_ui_form: {
                                id: '409a118e74e34c5bb5b15ce3b560f2c1'
                                key: {
                                    name: 'x_test_sdlc_app_sdlc_issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '4ed8f084edcc460b9058617c0ee601f9'
                                key: {
                                    name: 'x_test_sdlc_app_sdlc_issue'
                                    caption: 'Issue Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '14e30b77f1cb4487a2f93d597c8478ea'
                        key: {
                            sys_ui_section: {
                                id: '4ed8f084edcc460b9058617c0ee601f9'
                                key: {
                                    name: 'x_test_sdlc_app_sdlc_issue'
                                    caption: 'Issue Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'description'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '19877aae44024de2b98e1cfb67300f2d'
                        key: {
                            document_key: 'aedbd55414474ea4aa50fe8493c64a37'
                            variable: '8570e0e33756030064a52f3c8e41f16c'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '19b3584936334b289245922e235cffe7'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'severity'
                            value: 'high'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '23a810cb2da84f88999a45a20d0cbc17'
                        key: {
                            document_key: 'd9927b1d86464bd1a2dbbe155070c123'
                            variable: 'cbddfa135320220002c6435723dc3415'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '25d5d63393c14f59a66a72c2ffc945b6'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '26e391cdfeec4ae1a2cc5f46092bacbc'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'issue_type'
                            value: 'code_quality'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '29432a775fcc4261b44ce18ab12ca2d8'
                        key: {
                            document_key: '31f7449e67da4114a375cb371d40fdfd'
                            variable: 'b3dba2465320220002c6435723dc34f0'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '2ce4bb41cd264f1187dbfcbf7c34f521'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2da3346fd9e44cf7bf10615948456b59'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'state'
                            value: 'in_progress'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '305c253f8e5f49fbb097c77b9955b638'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'sdlc_phase'
                            value: 'deployment'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '31338c8bfec54b42b4880a46f056b719'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'environment'
                            value: 'qa'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3443d769c8b94cfbb0e92eedaee73fb2'
                        key: {
                            document_key: '221e0526567c44f3ad3cb3929cb2920d'
                            variable: '3a662f60a3023110571967d1361e6134'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '384f6b8aa7a0472bbc85c40b882d9d55'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'target_resolution_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3a5c239360494c9293c4c97cdbc62f93'
                        key: {
                            sys_ui_section: {
                                id: 'b04c2fcbf60144b688de64dfb000a75c'
                                key: {
                                    name: 'x_test_sdlc_app_sdlc_issue'
                                    caption: 'Assignment & Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'target_resolution_date'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3e42cc68e0de400b9d6664644170c6b0'
                        key: {
                            document_key: '221e0526567c44f3ad3cb3929cb2920d'
                            variable: '27d4e1c25320220002c6435723dc3486'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '3f138aed1a7a47cdb7ad8f7db1274e31'
                        key: {
                            document_key: '31f7449e67da4114a375cb371d40fdfd'
                            variable: '946f3c1a0f23330072e6452bc4767eda'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '409a118e74e34c5bb5b15ce3b560f2c1'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '41c678df358f400b93b21b09fd8b7b41'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'environment'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '42bb60b2509e455aa033184a48d810c7'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'issue_type'
                            value: 'documentation'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '44134cee10814e1c9440a7a3eb535fad'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'issue_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4613464eb1e94fb8848d7b07b583337b'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'environment'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4c490390a3294fe28c805d2fd2bae83c'
                        key: {
                            document_key: '31f7449e67da4114a375cb371d40fdfd'
                            variable: '424ca6465320220002c6435723dc34b5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4e72ecc0a3274a7fbad4c24c13a92df2'
                        key: {
                            sys_ui_section: {
                                id: 'b04c2fcbf60144b688de64dfb000a75c'
                                key: {
                                    name: 'x_test_sdlc_app_sdlc_issue'
                                    caption: 'Assignment & Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'resolution_notes'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '4ed8f084edcc460b9058617c0ee601f9'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            caption: 'Issue Details'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '4f2ed2a3403048dbaac83d150e0ab5b4'
                        key: {
                            document_key: 'd9927b1d86464bd1a2dbbe155070c123'
                            variable: '52ed1e5b5360220002c6435723dc3421'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4fd476fea4c04da89e873c2554a34eb5'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'resolution_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_atf_test_suite_test'
                        id: '51fc5d464be7443fb4d31e85786fa99e'
                        key: {
                            test_suite: 'c7fe4e024806453da1a9adb0afa9d1d7'
                            test: '7884ee5dd220433fbd08b0681810cbeb'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '53142077ed464f6da04f0d1999430500'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'sdlc_phase'
                            value: 'design'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5500e440e3304fa8b572523b6c1f98de'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'issue_type'
                            value: 'bug'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5567be16e1294691b8666f804e7e4b65'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'severity'
                            value: 'low'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '57043c6ae36e446dbb11322f4891ce6a'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'target_resolution_date'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '582a054f98d94c7c9368903ad32e6797'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_atf_test_suite_test'
                        id: '5b6c08c5bfdb49eba36fb141dda2498a'
                        key: {
                            test_suite: 'c7fe4e024806453da1a9adb0afa9d1d7'
                            test: '0591be8e38064e5e95c7e56842df1dee'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5d1ebfdf89b543689090819c1676b636'
                        key: {
                            document_key: '221e0526567c44f3ad3cb3929cb2920d'
                            variable: 'bb84ed825320220002c6435723dc3400'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '5e5c30c1e83a4cd2a25fb36c4ac81238'
                        key: {
                            document_key: '886d3f053e3a4f38a11513d1e3a5672c'
                            variable: 'b6d2b40c73720300c79260bdfaf6a786'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '62fa2bf5ed9246d682b2f0c061d88613'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'sdlc_phase'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '648aafccca29430fa7a11a33de74b790'
                        key: {
                            document_key: 'aedbd55414474ea4aa50fe8493c64a37'
                            variable: '90749dd73702030064a52f3c8e41f12d'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '67f11b093cc346f0b1ab6fed1853beac'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'sdlc_phase'
                            value: 'maintenance'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '689ea2188805490d914571f3b4dd9833'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'sdlc_phase'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6b58839c66d0490a9237f211a752d738'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'component'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6db1e3251c2d46e7bdc9d3941da04b46'
                        key: {
                            sys_ui_section: {
                                id: '4ed8f084edcc460b9058617c0ee601f9'
                                key: {
                                    name: 'x_test_sdlc_app_sdlc_issue'
                                    caption: 'Issue Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6f450fac4b03411a80985dd12b7b6edf'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'state'
                            value: 'closed'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '70322103da804bb994cc80d32c7b28be'
                        key: {
                            sys_ui_section: {
                                id: 'b04c2fcbf60144b688de64dfb000a75c'
                                key: {
                                    name: 'x_test_sdlc_app_sdlc_issue'
                                    caption: 'Assignment & Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7095bca0f83f4fc3b598ef78411ad38b'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'issue_type'
                            value: 'test_coverage'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '73df8606cea6414ca1dbcd60955190ef'
                        key: {
                            document_key: '871a1fc620c24ae8a268eec85db007a0'
                            variable: 'c796d40497302200abe4bb7503ac4ad8'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '7454521cd8b742968dfd64b1eca22de1'
                        key: {
                            document_key: 'd9927b1d86464bd1a2dbbe155070c123'
                            variable: 'ff6e125353a0220002c6435723dc3442'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '75e24f03565a4dad9563ac6f145a53ee'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'severity'
                            value: 'critical'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7ab58dc5fafc4501a2cea8c510dae018'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'sdlc_phase'
                            value: 'development'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7ca43d30b1cd431a946d25044b13261f'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'environment'
                            value: 'staging'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7cbe248b985247c3a5c06609d30a0aa4'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'issue_type'
                            value: 'technical_debt'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7ea0156b1ab240e79f8d8c409b5421a8'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'environment'
                            value: 'production'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '7f7f0826f30748b087d3e65838e3faf0'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'issue_type'
                            value: 'requirement_gap'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7f91d3444180473f9b000461f86b04b1'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '804b365853354adbb218aed8d84f48f2'
                        key: {
                            sys_ui_section: {
                                id: '4ed8f084edcc460b9058617c0ee601f9'
                                key: {
                                    name: 'x_test_sdlc_app_sdlc_issue'
                                    caption: 'Issue Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '83ead633bdb44f61832c42990a5e35a0'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'state'
                            value: 'new'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '847853163cfe4af9bfcbe56d33b0b465'
                        key: {
                            sys_ui_form: {
                                id: '409a118e74e34c5bb5b15ce3b560f2c1'
                                key: {
                                    name: 'x_test_sdlc_app_sdlc_issue'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'b04c2fcbf60144b688de64dfb000a75c'
                                key: {
                                    name: 'x_test_sdlc_app_sdlc_issue'
                                    caption: 'Assignment & Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '89b10783eb564df1b56c2ad421c38dab'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'environment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '89d66c3db4c34ae894ac14b3fe77b82d'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'assigned_to'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '8e334c2aeadb4a758ab04bf03c4d348e'
                        key: {
                            document_key: 'aedbd55414474ea4aa50fe8493c64a37'
                            variable: '932d14a33756030064a52f3c8e41f120'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8e80e0a9faea4a8689b64b73e6f1e222'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'state'
                            value: 'resolved'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '9383e97a42eb4ab1a8c482ff66e75a3b'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'state'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '976762c774be44748d104299ddcc1184'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'sdlc_phase'
                            value: 'testing'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '97ec2f9e65e945ffa603cbf1207c76ea'
                        key: {
                            sys_ui_section: {
                                id: '4ed8f084edcc460b9058617c0ee601f9'
                                key: {
                                    name: 'x_test_sdlc_app_sdlc_issue'
                                    caption: 'Issue Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'component'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '98480ee7d6b5437cb033d3e392889d50'
                        key: {
                            sys_ui_section: {
                                id: 'b04c2fcbf60144b688de64dfb000a75c'
                                key: {
                                    name: 'x_test_sdlc_app_sdlc_issue'
                                    caption: 'Assignment & Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'flagged_by'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '99b00bf005a64386910ab3b34d137d12'
                        key: {
                            sys_ui_section: {
                                id: '4ed8f084edcc460b9058617c0ee601f9'
                                key: {
                                    name: 'x_test_sdlc_app_sdlc_issue'
                                    caption: 'Issue Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'issue_type'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9a47543adb114ac0b3196f911435d406'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'issue_type'
                            value: 'design_flaw'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: '9a4d52891b9945579b14c8c8e86293f2'
                        key: {
                            document_key: 'd9927b1d86464bd1a2dbbe155070c123'
                            variable: '6aad5a575360220002c6435723dc34b0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9bb3ce38c5564fcb9a7454f670b7afbc'
                        key: {
                            sys_ui_section: {
                                id: '4ed8f084edcc460b9058617c0ee601f9'
                                key: {
                                    name: 'x_test_sdlc_app_sdlc_issue'
                                    caption: 'Issue Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'sdlc_phase'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9d8f5370f1954ce8b73c771ee4032f31'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'severity'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a280737cbe4542628478da4ad9df72e1'
                        key: {
                            sys_ui_section: {
                                id: '4ed8f084edcc460b9058617c0ee601f9'
                                key: {
                                    name: 'x_test_sdlc_app_sdlc_issue'
                                    caption: 'Issue Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'severity'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a2fd373c72df47d0ac12380a72047e2b'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'assigned_to'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a575683524ac4e08a1e8013576a83136'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'flagged_by'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'a6182b39b9584f57a02015f93a60bf2f'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a83dc6c9250e4beeb8993c2128edb8da'
                        key: {
                            sys_ui_section: {
                                id: 'b04c2fcbf60144b688de64dfb000a75c'
                                key: {
                                    name: 'x_test_sdlc_app_sdlc_issue'
                                    caption: 'Assignment & Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a87260586fc4498bb80bd275b566513a'
                        key: {
                            sys_ui_section: {
                                id: '4ed8f084edcc460b9058617c0ee601f9'
                                key: {
                                    name: 'x_test_sdlc_app_sdlc_issue'
                                    caption: 'Issue Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ace70d8e9abe4d429a43a23a65a33dc2'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'state'
                            value: 'wont_fix'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'b04c2fcbf60144b688de64dfb000a75c'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            caption: 'Assignment & Resolution'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b18eaaf4c2f2462d95c7b02ded7837e9'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'severity'
                            value: 'medium'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_element_mapping'
                        id: 'b3e436bfbd984f1ab6b02740dfafcccd'
                        key: {
                            field: 'record_id'
                            table: 'var__m_atf_input_variable_1f39a288df60220062fe6c7a4df2639d'
                            id: 'd9927b1d86464bd1a2dbbe155070c123'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b45bb804d4c14dc2b9e220626f625693'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'issue_type'
                            value: 'security'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'bf068d135a7c44f0a00873cd5f2bbd4c'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'sdlc_phase'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c8d9f66786c84d848fe1e9c6d5a93f77'
                        key: {
                            sys_ui_section: {
                                id: 'b04c2fcbf60144b688de64dfb000a75c'
                                key: {
                                    name: 'x_test_sdlc_app_sdlc_issue'
                                    caption: 'Assignment & Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'cd287ca497cd494e8da4aee56cf1b483'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'issue_type'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'd888a5e013964cfcb6083a0b21d801dc'
                        key: {
                            document_key: 'aedbd55414474ea4aa50fe8493c64a37'
                            variable: '4a3319d73702030064a52f3c8e41f1a9'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd9a5303790074a5eb1d569ac45a643b1'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'resolution_notes'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dac7a862c7e5498fb9dda55eb5af9bd9'
                        key: {
                            sys_ui_section: {
                                id: 'b04c2fcbf60144b688de64dfb000a75c'
                                key: {
                                    name: 'x_test_sdlc_app_sdlc_issue'
                                    caption: 'Assignment & Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_to'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dcc740281592416c83dffcbd277db0ee'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'flagged_by'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'dcd9c0cbaf0747d69ee1152989b81d3e'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dedf024febbc4414b1f8069ea9c2800e'
                        key: {
                            sys_ui_section: {
                                id: 'b04c2fcbf60144b688de64dfb000a75c'
                                key: {
                                    name: 'x_test_sdlc_app_sdlc_issue'
                                    caption: 'Assignment & Resolution'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e38db378b7e2440f840871292232b7b5'
                        key: {
                            sys_ui_section: {
                                id: '4ed8f084edcc460b9058617c0ee601f9'
                                key: {
                                    name: 'x_test_sdlc_app_sdlc_issue'
                                    caption: 'Issue Details'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e41520c335c845f0866254191cbf5527'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'state'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'e502cfdb26ef41e7ae6b7bda09e175eb'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'severity'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e8c6c16fb8ac45ad9a9a7451f345ff2b'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'issue_type'
                            value: 'performance'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ea6308d6f36a4205bc534d8cee7b6c8d'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'severity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ee4aff993aa045cb969a2e9c55d3f64e'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'component'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'f7dbcbc97b88465dba2573895f36dc81'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fa5914d1682b46949d0216cd53237308'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'issue_type'
                        }
                    },
                    {
                        table: 'sys_variable_value'
                        id: 'faa8e877980a4d6fb9ed66fcebbc827c'
                        key: {
                            document_key: '221e0526567c44f3ad3cb3929cb2920d'
                            variable: '6f2a59a4e7133300b5646ea8c2f6a975'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fb2701641dd24398a48b57b469c4256f'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fbfb32d780ff4090a0272ae9702bf2b1'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'state'
                            value: 'in_review'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fe9cf425ff0047049f4f5989ee389fff'
                        key: {
                            name: 'x_test_sdlc_app_sdlc_issue'
                            element: 'environment'
                            value: 'dev'
                            language: 'en'
                            dependent_value: 'NULL'
                        }
                    },
                ]
            }
        }
    }
}
