<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;
use Illuminate\Support\Facades\Validator;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Client::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'name' => 'required',
            'cpf' => 'required'
        ]);

        if ($validator->fails()) {
            return $this->sendError('Erro de validação', $validator->errors());
        }

        $client = Client::create($input);

        return response()->json([
            'success' => true,
            'message' => 'Cliente criado com sucesso',
            'client' => $client,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Client::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if (Client::where('id', $id)->exists()) {
            $client = Client::find($id);

            $client->name = $request->name;
            $client->cpf = $request->cpf;
            $client->telephone = $request->telephone;

            $client->save();

            return response()->json([
                'message' => 'Cliente atualizado com sucesso!'
            ], 200);
        }
        else {
            return response()->json([
                'message' => 'Cliente não encontrado'
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (Client::where('id', $id)->exists()) {
            $client = Client::find($id);
            $client->delete();

            return response()->json([
                'message' => 'Cliente excluído com sucesso!'
            ], 200);
        }
        else {
            return response()->json([
                'message' => 'Cliente não encontrado'
            ], 404);
        }
    }
}
